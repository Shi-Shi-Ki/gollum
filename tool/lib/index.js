"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const util = __importStar(require("./util"));
const plugin_pb_1 = require("google-protobuf/google/protobuf/compiler/plugin_pb");
const logger_1 = __importDefault(require("./logger"));
util.withAllStdIn((inputBuff) => {
    try {
        logger_1.default.log("### start");
        const typedInputBuff = new Uint8Array(inputBuff.length);
        typedInputBuff.set(inputBuff);
        const codeGenRequest = plugin_pb_1.CodeGeneratorRequest.deserializeBinary(typedInputBuff);
        const codeGenResponse = new plugin_pb_1.CodeGeneratorResponse();
        //logger.log(JSON.stringify(codeGenRequest.getParameter()))
        //codeGenResponse.setSupportedFeatures(CodeGeneratorResponse.Feature.FEATURE_PROTO3_OPTIONAL)
        //const exportMap = new ExportMap()
        //const fileNameToDescriptor: {[key: string]: FileDescriptorProto} = {}
        codeGenRequest.getProtoFileList().forEach(protoFileDescriptor => {
            logger_1.default.log("+++ proto) fine_name: " + protoFileDescriptor.getName());
            protoFileDescriptor.getDependencyList().forEach((dependency) => {
                logger_1.default.log("-- dependency: " + dependency);
            });
            logger_1.default.log("...");
            protoFileDescriptor.getMessageTypeList().forEach(enumType => {
                logger_1.default.log("-- enumType.Name: " + enumType.getName());
                logger_1.default.log("-- enumType.Options: " + enumType.getOptions());
                enumType.getFieldList().forEach(field => {
                    logger_1.default.log("--- enumType.FieldName: " + field.getName());
                    logger_1.default.log("--- enumType.FieldOptions: " + field.getOptions());
                    logger_1.default.log("--- enumType.Type: " + field.getType());
                });
            });
            logger_1.default.log("...");
            protoFileDescriptor.getExtensionList().forEach(extension => {
                logger_1.default.log("-- extension.Name: " + extension.getName());
            });
            logger_1.default.log("...");
            protoFileDescriptor.getEnumTypeList().forEach(enumType => {
                logger_1.default.log("-- enumTypeList.Name: " + enumType.getName());
            });
        });
        codeGenRequest.getFileToGenerateList().forEach(fileName => {
            logger_1.default.log("+++ generate) fine_name: " + fileName);
        });
        const thisFile = new plugin_pb_1.CodeGeneratorResponse.File();
        thisFile.setName("dummy.ts");
        thisFile.setContent("TEST TEST TEST!!!");
        codeGenResponse.addFile(thisFile);
        //throw new Error("test error!!!")
        process.stdout.write(Buffer.from(codeGenResponse.serializeBinary()));
        logger_1.default.log("### end");
    }
    catch (err) {
        logger_1.default.log("!!! error !!!");
        logger_1.default.log(JSON.stringify(err.stack));
        //console.error("protoc-gen-ts-service error: " + err.stack + "\n")
        process.exit(1);
    }
});
//# sourceMappingURL=index.js.map