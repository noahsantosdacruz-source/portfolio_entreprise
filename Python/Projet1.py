from tkinter import *
import random

fenetre = Tk()      
fenetre.minsize(500, 750)
fenetre.maxsize(500, 750)
fenetre.config(background="black")
fenetre.iconbitmap("gif noir.png") 




class pierre_feuille_ciseaux:
    def __init__(self, master):
        self.master = master
        master.title("Pierre-Feuille-Ciseaux")

        self.choices = ["Pierre", "Feuille", "Ciseaux"]

        self.label = Label(master, text="Choisissez Pierre, Feuille ou Ciseaux",bg="black", fg="white")
        self.label.pack(pady=10)

        self.buttons_frame = Frame(master)
        self.buttons_frame.pack(pady=5)

        for choice in self.choices:
            button = Button(self.buttons_frame, text=choice, command=lambda c=choice: self.jouer(c), width=10, height=2,border=5, relief="raised",fg="black", bg="lightgray")
            button.pack(side=LEFT, padx=5)

        self.result_label = Label(master, text="")
        self.result_label.pack(pady=10)

    def jouer(self, player_choice):
        computer_choice = random.choice(self.choices)
        if player_choice == computer_choice:
            result = "Égalité !"
        elif (player_choice == "Pierre" and computer_choice == "Ciseaux") or \
             (player_choice == "Feuille" and computer_choice == "Pierre") or \
             (player_choice == "Ciseaux" and computer_choice == "Feuille"):
            result = "Vous avez gagné !"
        else:
            result = "L'ordinateur a gagné !"

        self.result_label.config(text=f"Vous avez choisi {player_choice}, l'ordinateur a choisi {computer_choice}. {result}")

class Morpion:  
    def __init__(self, master):
        self.master = master
        master.title("Morpion")
        

        # Ajoutez ici les éléments spécifiques au jeu du pendule    


# --- Lancement du jeu Pierre-Feuille-Ciseaux dans la même fenêtre --- 
fenetre.title("Pierre-Feuille-Ciseaux")
titre = Label(fenetre, text="Pierre-Feuille-Ciseaux", font=("Courrier", 16), fg="gray",bg="black")
titre.pack()

pfc = pierre_feuille_ciseaux(fenetre)


fenetre.mainloop()

       