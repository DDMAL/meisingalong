#!/bin/bash

export LOGFILE="$(pwd)/log.txt"

export VERBOSITY=2

export JPEG_QUALITY=90

export FILESYSTEM_PREFIX="$(pwd)/images/"

export CORS="*"

export MAX_LAYERS=4

export MAX_CVT=800

export MAX_IMAGE_CACHE_SIZE=1000

cd fcgi/scripts
./iipsrv.fcgi --bind localhost:9000
