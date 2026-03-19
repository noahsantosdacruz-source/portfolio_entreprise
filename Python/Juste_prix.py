from tkinter import *
import random

fenetre = Tk()      
fenetre.minsize(500, 750)
fenetre.maxsize(500, 750)
fenetre.config(background="black")
fenetre.iconbitmap("gif noir.png") 




class JeuPrixMystere:
    def __init__(self, master):
        self.master = master
        master.title("Le Juste Prix")

        self.prix_mystere = random.randint(1, 100)
        self.essais = 0

        self.label = Label(master, text="Devinez le prix mystère entre 1 et 100")
        self.label.pack(pady=10)

        self.entry = Entry(master)
        self.entry.pack(pady=5)

        self.guess_button = Button(master, text="Proposer", command=self.verifier_proposition)
        self.guess_button.pack(pady=5)

        self.result_label = Label(master, text="")
        self.result_label.pack(pady=10)

    def verifier_proposition(self):
        try:
            proposition = int(self.entry.get())
            self.essais += 1
            if proposition < self.prix_mystere:
                self.result_label.config(text="C'est plus !")
            elif proposition > self.prix_mystere:
                self.result_label.config(text="C'est moins !")
            else:
                self.result_label.config(
                    text=f"Félicitations ! Vous avez trouvé le prix mystère en {self.essais} essais."
                )
        except ValueError:
            self.result_label.config(text="Veuillez entrer un nombre valide.")