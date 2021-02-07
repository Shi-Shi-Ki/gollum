if [ "$1" = "code" ]; then 

PLUGIN_TS=./node_modules/.bin/protoc-gen-ts
PLUGIN_GRPC=./node_modules/.bin/grpc_tools_node_protoc_plugin
PLUGIN_TS_BSD=./node_modules/.bin/protoc-gen-bsd-ts
DIST_DIR=./generated

yarn grpc_tools_node_protoc \
--js_out=import_style=commonjs,binary:${DIST_DIR} \
--ts_out=import_style=commonjs,binary:${DIST_DIR} \
--bsd-ts_out=import_style=commonjs,binary:${DIST_DIR} \
--grpc_out=${DIST_DIR} \
--plugin=protoc-gen-grpc="${PLUGIN_GRPC}" \
--plugin=protoc-gen-ts="${PLUGIN_TS}" \
--plugin=protoc-gen-bsd-ts="${PLUGIN_TS_BSD}" \
--proto_path=./proto/ \
--proto_path=./proto/dep/ \
./proto/*.proto ./proto/dep/*.proto

elif [ "$1" = "doc" ]; then  
  
yarn grpc_tools_node_protoc \
--doc_out=./doc/api \
--doc_opt=html,index.html \
--proto_path=./proto/ \
--proto_path=./proto/dep/ \
./proto/*.proto

yarn grpc_tools_node_protoc \
--doc_out=./doc/api \
--doc_opt=markdown,MAIN.md \
--proto_path=./proto/ \
--proto_path=./proto/dep/ \
./proto/*.proto

else
  echo "Please pass code or doc"
fi
