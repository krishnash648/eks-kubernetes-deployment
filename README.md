# EKS Kubernetes Deployment

A production-style Kubernetes microservices deployment using Docker, Helm, Horizontal Pod Autoscaling and NGINX Ingress.

## Architecture

Client ? NGINX Ingress ? Frontend Service ? Backend Service ? Redis

## Technologies Used

- Docker
- Kubernetes
- Helm
- Minikube
- Horizontal Pod Autoscaler (HPA)
- NGINX Ingress Controller
- Redis
- GitHub

## Project Structure

backend/ ? Node.js backend service  
frontend/ ? Frontend UI service  
helm-charts/ ? Helm deployment charts  
ingress.yaml ? Kubernetes ingress configuration

## Features

- Containerized microservices
- Kubernetes deployments and services
- Helm-based deployment
- Horizontal pod autoscaling
- Rolling updates
- Ingress-based routing
- Docker Hub image registry

## How to Run

Start cluster:

kubectl apply -f ingress.yaml  
helm install myapp ./helm-charts/myapp -n microservices-prod

Access application:

http://app.local

## Author

Krishna
