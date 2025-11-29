# K8s Monitoring

## Deploy
kubectl apply -f monitoring.yml

## Ports (3 terminals)
kubectl port-forward svc/prometheus-service 9092:9090
kubectl port-forward svc/grafana-service 3002:3000
kubectl port-forward svc/client-website-service 3000:80

## Verify
- localhost:9092/targets (3 targets)
- localhost:3002 → Explore → `up` (3 series)
- Import dashboard 3662

## Cleanup
kubectl delete -f monitoring.yml
