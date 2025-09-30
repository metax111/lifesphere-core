package main

import (
	"fmt"
	"net/http"
)

func healthCheck(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	fmt.Fprint(w, `{"status":"ok"}`)
}

func main() {
	http.HandleFunc("/health", healthCheck)
	port := ":4003"
	fmt.Println("Health Service running on", port)
	if err := http.ListenAndServe(port, nil); err != nil {
		panic(err)
	}
}
