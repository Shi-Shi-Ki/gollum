#
# gateway
#
FROM envoyproxy/envoy-dev:latest

COPY ./envoy-config.yml /etc/envoy/gateway-envoy.yaml
COPY ./docker-entrypoint.sh /
RUN chmod 755 /docker-entrypoint.sh

ENV GATEWAY_ENV="local"
ENTRYPOINT [ "/docker-entrypoint.sh" ]
CMD /usr/local/bin/envoy --bootstrap-version 2 -c /etc/envoy/gateway-envoy.yaml
