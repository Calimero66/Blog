#!/bin/bash
COMPONENT_NAME=$1
mkdir -p src/$COMPONENT_NAME
touch src/$COMPONENT_NAME/$COMPONENT_NAME.jsx
echo "Component $COMPONENT_NAME created successfully!"
