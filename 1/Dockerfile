FROM denoland/deno:alpine-2.0.4

RUN apk add patch

WORKDIR /run
COPY deno-monorepo-repro deno-monorepo-repro/
COPY 1.patch .

WORKDIR /run/deno-monorepo-repro
RUN patch -p1 <../1.patch
RUN deno install --allow-scripts

WORKDIR /run/deno-monorepo-repro/apps/web
CMD ["run", "-A", "npm:vite", "dev", "--host"]