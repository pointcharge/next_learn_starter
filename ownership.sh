#!/bin/bash

# This is just to help set ownership of this dir when using VSCode inside a docker container
# Set the owner to root when doing anything in VSCode, and set it back to the host when not

if [ "$1" = "$(whoami)" -o "$1" = "root" ] 
then
    echo "Setting current folder owner to: $1"
    echo "Running 'sudo chown -R $1:$1 .'"
    sudo chown -R $1:$1 .
  if [ "$2" = "true" ]
  then
    echo "New owners and permissions:"
    ls -al
  fi
else
    echo "Can only set owner to: $(whoami), root"
fi

# if [ "$1" = "start" ]; then
#     echo "Changing this directory's owner to 'root'"
#     sudo chown -R root:root .

#     echo "Starting docker container(s)"
#     docker-compose up -d

# elif [ "$1" = "stop" ]; then

#     echo "Stopping docker container(s)"
#     docker-compose down

#     echo "Changing this directory's owner to $(whoami)"
#     sudo chown -R $(whoami):$(whoami) .

# else
#     echo "Invalid argument. Valid arguments are: 'start', 'stop'. Please run 'bash ./docker.sh ARGUMENT'"
# fi