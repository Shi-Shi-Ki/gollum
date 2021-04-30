import * as util from "./util"
import {
  CodeGeneratorRequest,
  CodeGeneratorResponse
} from "google-protobuf/google/protobuf/compiler/plugin_pb"
import { FileDescriptorProto } from "google-protobuf/google/protobuf/descriptor_pb"
import logger from "./logger"

util.withAllStdIn((inputBuff: Buffer) => {
  try {
    logger.log("### start")
    const typedInputBuff = new Uint8Array(inputBuff.length)
    typedInputBuff.set(inputBuff)
    const codeGenRequest = CodeGeneratorRequest.deserializeBinary(typedInputBuff)
    const codeGenResponse = new CodeGeneratorResponse()
//logger.log(JSON.stringify(codeGenRequest.getParameter()))
    //codeGenResponse.setSupportedFeatures(CodeGeneratorResponse.Feature.FEATURE_PROTO3_OPTIONAL)
    //const exportMap = new ExportMap()
    //const fileNameToDescriptor: {[key: string]: FileDescriptorProto} = {}

    codeGenRequest.getProtoFileList().forEach(protoFileDescriptor => {
      logger.log("+++ proto) fine_name: "+ protoFileDescriptor.getName())
      protoFileDescriptor.getDependencyList().forEach((dependency: string) => {
        logger.log("-- dependency: "+ dependency)
      })
      logger.log("...")
      protoFileDescriptor.getMessageTypeList().forEach(enumType => {
        logger.log("-- enumType.Name: "+ enumType.getName())
        logger.log("-- enumType.Options: "+ enumType.getOptions())
        enumType.getFieldList().forEach(field => {
          logger.log("--- enumType.FieldName: "+ field.getName())
          logger.log("--- enumType.FieldOptions: "+ field.getOptions())
          logger.log("--- enumType.Type: "+ field.getType())
        })
      })
      logger.log("...")
      protoFileDescriptor.getExtensionList().forEach(extension => {
        logger.log("-- extension.Name: "+ extension.getName())
      })
      logger.log("...")
      protoFileDescriptor.getEnumTypeList().forEach(enumType => {
        logger.log("-- enumTypeList.Name: "+ enumType.getName())
      })
    })
    codeGenRequest.getFileToGenerateList().forEach(fileName => {
      logger.log("+++ generate) fine_name: "+ fileName)
    })

    const thisFile = new CodeGeneratorResponse.File()
    thisFile.setName("dummy.ts")
    thisFile.setContent("TEST TEST TEST!!!")
    codeGenResponse.addFile(thisFile)
//throw new Error("test error!!!")
    process.stdout.write(Buffer.from(codeGenResponse.serializeBinary()))
    logger.log("### end")
  } catch (err) {
    logger.log("!!! error !!!")
    logger.log(JSON.stringify(err.stack))
    //console.error("protoc-gen-ts-service error: " + err.stack + "\n")
    process.exit(1)
  }
})

