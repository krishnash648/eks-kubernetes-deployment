\# Kubernetes Microservices Deployment on AWS EKS



A production-style microservices deployment using Docker, Kubernetes, Helm, Redis, Horizontal Pod Autoscaling and NGINX Ingress.



This project demonstrates deploying containerized services on \*\*AWS EKS\*\* with a scalable architecture.



---



\## Architecture



Client  

↓  

AWS LoadBalancer (ELB)  

↓  

NGINX Ingress Controller  

↓  

Frontend Service  

↓  

Backend Service  

↓  

Redis Cache



---



\## Technologies Used



\- Docker

\- Kubernetes

\- AWS EKS

\- Helm

\- Redis

\- NGINX Ingress Controller

\- Horizontal Pod Autoscaler

\- AWS LoadBalancer

\- GitHub



---



\## Project Structure





backend/ → Node.js backend service

frontend/ → Frontend UI

helm-charts/ → Helm deployment charts

ingress.yaml → Kubernetes ingress configuration





---



\## Features



\- Containerized microservices

\- Kubernetes deployments and services

\- Helm-based deployment

\- Horizontal pod autoscaling

\- Redis caching

\- Ingress-based routing

\- AWS LoadBalancer integration

\- Production-style EKS deployment



---



\## Live Deployment



This application is deployed on \*\*AWS EKS\*\* and exposed using \*\*NGINX Ingress + AWS LoadBalancer\*\*.



Example URL:





http://<AWS-ELB-DNS>





---



\## How to Deploy



\### 1️⃣ Create EKS cluster





eksctl create cluster

--name microservices-cluster

--region us-east-1

--nodegroup-name microservices-nodes

--node-type t3.small

--nodes 1





\### 2️⃣ Deploy application





helm install myapp ./helm-charts/myapp -n microservices-prod --create-namespace





\### 3️⃣ Deploy ingress





kubectl apply -f ingress.yaml





\### 4️⃣ Access application





kubectl get ingress -n microservices-prod





---



\## Author



Krishna Sharma

