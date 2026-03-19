from tkinter import *
from math import *

# --- Fenêtre ---
fen = Tk()
fen.title("Calculatrice")
fen.geometry("400x500")
fen.resizable(False, False)
fen.config(bg="black")

fen.title("Calculatrice")
titre = Label(fen, text="Calculatrice", font=("Courrier", 25), fg="gray",bg="black",anchor="w")
titre.pack()

class Calculatrice:
    def __init__(self, master):
        self.master = master
        master.title("Calculatrice")
# --- Affichage ---
ecran = Entry(fen, font=("Arial", 20), bd=5, relief=RIDGE, justify="right")
ecran.pack(fill="both", ipadx=8, ipady=15)

# --- Fonction d’évaluation ---
def cliquer(valeur):
    ecran.insert(END, valeur)

def effacer():
    ecran.delete(0, END)

def egal():
    try:
        expression = ecran.get()
        expression = expression.replace("^", "**")  # puissance
        res = eval(expression)
        ecran.delete(0, END)
        ecran.insert(END, str(res))
    except:
        ecran.delete(0, END)
        ecran.insert(END, "Erreur")

# --- Boutons ---
boutons = [
    ["Inv","(",")","%","√"],
    ["sin" ,"7","8","9","/"],
    ["log" ,"4","5","6","*"],
    ["cos","1","2","3","-"],
    ["tan","0",".","^","+"],

]

frame = Frame(fen)
frame.pack(expand=True)

# création des boutons
for ligne in boutons:
    row = Frame(frame)
    row.pack(expand=True, fill="both")
    for b in ligne:
        btn = Button(row, text=b, font=("Arial",14), command=lambda x=b: cliquer(x))
        btn.pack(side=LEFT, expand=True, fill="both")

# bas : C et =
row = Frame(fen)
row.pack(expand=True, fill="both", pady=5)

btn_c = Button(row, text="C", font=("Arial",10), bg="red", fg="white", command=effacer, border=20)
btn_c.pack(side=LEFT, expand=True, fill="both")

btn_equal = Button(row, text="=", font=("Arial",10), bg="green", fg="white", command=egal, border=20)
btn_equal.pack(side=LEFT, expand=True, fill="both")





calculatrice = Calculatrice(fen)

fen.mainloop()