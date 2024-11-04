FROM denoland/deno:alpine-2.0.4

WORKDIR /run
COPY workspace workspace/

WORKDIR /run/workspace
RUN deno install

WORKDIR /run/workspace/website
CMD ["run", "-A", "--node-modules-dir", "npm:vite", "--host"]