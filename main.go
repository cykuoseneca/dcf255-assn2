package main

import (
	"fmt"
	"log"
	"net/http"
	"text/template"
)

var temp *template.Template

func init() {
	temp = template.Must(template.ParseGlob("static/*.html"))
}

func RunIntro(w http.ResponseWriter, r *http.Request) {
	temp.ExecuteTemplate(w, "intro.html", nil)
}

func RunHistory(w http.ResponseWriter, r *http.Request) {
	temp.ExecuteTemplate(w, "history.html", nil)
}

func RunMechanism(w http.ResponseWriter, r *http.Request) {
	temp.ExecuteTemplate(w, "mechanism.html", nil)
}

func RunRef(w http.ResponseWriter, r *http.Request) {
	temp.ExecuteTemplate(w, "reference.html", nil)
}

func RunAbout(w http.ResponseWriter, r *http.Request) {
	temp.ExecuteTemplate(w, "about.html", nil)
}

func main() {
	fs := http.FileServer(http.Dir("assets"))
	http.Handle("/assets/", http.StripPrefix("/assets", fs))
	http.HandleFunc("/", RunIntro)
	http.HandleFunc("/history", RunHistory)
	http.HandleFunc("/mechanism", RunMechanism)
	http.HandleFunc("/reference", RunRef)
	http.HandleFunc("/about", RunAbout)

	fmt.Print("Starting server at port 8000\n")
	if err := http.ListenAndServe(":8000", nil); err != nil {
		log.Fatal(err)
	}
}
