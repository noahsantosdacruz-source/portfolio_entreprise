tab = []
nb= int(input("Entrez le nombre d'éléments du tableau: "))
for i in range(nb):
    element = input(f"Entrez l'élément {i+1}: ".format(i+1))
    tab.append(element)
print("Le tableau est: ", tab)

for element in tab:
    print(element)

dictionnaire = {}
nom = input("Entrez le nom: ")
prenom = input("Entrez le prénom: ")
age = int(input("Entrez l'âge: "))
dictionnaire["nom"] = nom
dictionnaire["prénom"] = prenom
dictionnaire["âge"] = age



for cle in dictionnaire:
    print(f"{cle}: {dictionnaire[cle]}")

for value in dictionnaire.values():
        print(value)

for key, value in dictionnaire.items():
    print(f"{key}: {value}")