from tkinter import *
    





fenetre = Tk()      
fenetre.minsize(300, 400)
fenetre.maxsize(300, 500)
fenetre.iconbitmap("gif noir.png")
fenetre.title("Ma première fenêtre Tkinter")
fenetre.config(background="blue")
fenetre.config(cursor="circle", bg="lightgray", bd=10, relief="sunken")


titre = Label(fenetre, text="Projet Python", font=("Courrier", 16), fg="black")
titre.pack()

champ = Entry(fenetre, width=30, bg="lightgray", fg="black", font=("Arial", 12))
champ.pack(pady=20)
champ.insert(0, "Entrez votre texte ici")
bouton = Button(fenetre, text="Valider", bg="green", fg="white")
bouton.pack(pady=10)

def afficher_texte():
    texte = champ.get()
    label_resultat.config(text=texte)
bouton.config(command=afficher_texte)
label_resultat = Label(fenetre, text="", font=("Arial", 12), fg="blue")
label_resultat.pack(pady=10)



mainloop()



