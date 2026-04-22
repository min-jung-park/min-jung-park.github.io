#!/usr/bin/env bash
# Serve the site from the repo root so paths like ../images/ resolve correctly.
cd "$(dirname "$0")"
echo "Open: http://localhost:8080/html/publication_2023.html"
echo "Home: http://localhost:8080/index.html"
exec python3 -m http.server 8080
