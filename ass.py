#Question1 Ancestral stories
class Story:
    def __init__(self, title, length, age_group):
        self.title = title
        self.length = length
        self.age_group = age_group


class StoryTeller:
    def __init__(self, name, language):
        self.name = name
        self.language = language


class Translator:
    def __init__(self, translate_from_language, translate_to_language):
       
        self.translate_from_language = translate_from_language
        self.to_language = translate_to_language

        
story = Story("The Lion King", 10, "Children")
story_teller = StoryTeller("Mitch Dede", "English")
translator = Translator("Kiswahili", "English")


print("Story Details:")
print("Title:", story.title)
print("Age Group:", story.age_group)

print("StoryTeller Details:")
print("Name:", story_teller.name)
print("Language:", story_teller.language)

print("Translator Details:")
print("From Language:", translator.translate_from_language)
print("To Language:", translator.to_language)


  
  
    #Question2 African Cuisine
    #Pseudo code:Inputs:

class Recipe:
      def __init__(self, name, preparation_time):
        
        self.name = name
        self.preparation_time = preparation_time

    
class MorrocanRecipe(Recipe):
    def __init__(self, name, preparation_time, spice_level):
        super().__init__(name, preparation_time)
        self.spice_level = spice_level



class EthiopianRecipe(Recipe):
    def __init__(self, name, preparation_time, injera_required):
        super().__init__(name, preparation_time)
    
        self.injera_required = injera_required


class NigerianRecipe(Recipe):
    def __init__(self, name, preparation_time, jollof_rice):
        super().__init__(name, preparation_time)
        self.jollof_rice = jollof_rice

       
        #Question3 Wildlife Conservation

class Species:
     def __init__(self, diet, lifespan, migration_patterns):
        self.diet = diet
        self.lifespan = lifespan
        self.migration_patterns = migration_patterns

class Predator(Species):
    def __init__(self, diet, lifespan, migration_patterns, hunting_method):
        super().__init__(diet, lifespan, migration_patterns)
        self.hunting_method = hunting_method

class Prey(Species):
    def __init__(self, diet, lifespan, migration_patterns, hiding_behavior):
        super().__init__(diet, lifespan, migration_patterns)
        self.hiding_behavior = hiding_behavior


        
lion = Predator("Carnivore", 12, "Seasonal", "Ambush hunting")
gazelle = Prey("Herbivore", 8, "Seasonal", "Group hiding")

print(lion.diet) 
print(gazelle.lifespan) 
print(lion.hunting_method)  
print(gazelle.hiding_behavior)  



#Question4

class Artist:
    def __init__(self, name, country, musical_style, instruments):
        self.name = name
        self.country = country
        self.musical_style = musical_style
        self.instruments = instruments

class Performance:
    def __init__(self, artist, start_time, end_time):
        self.artist = artist
        self.start_time = start_time
        self.end_time = end_time

class Stage:
    def __init__(self, name, capacity):
        self.name = name
        self.capacity = capacity
        self.performances = []

        
artist1 = Artist("Wakadinali", "Kenya", "Gengetone", ["Drums", "Guitar"])
performance1 = Performance(artist1, "19:00", "21:00")
stage1 = Stage("Main Stage", 1000)
stage1.performances.append(performance1)


print(artist1.country)  
print(performance1.start_time) 
print(stage1.capacity) 


#Question5

class Product:
    def __init__(self, name, price, quantity):
        self.name = name
        self.price = price
        self.quantity = quantity

    def calculate_total_value(self):
        return self.price * self.quantity


product1 = Product("Shirt", 25.99, 5)
product2 = Product("Shoes", 59.99, 2)
product3 = Product("Hat", 12.99, 10)


total_value1 = product1.calculate_total_value()
total_value2 = product2.calculate_total_value()
total_value3 = product3.calculate_total_value()


print(f"Total value of {product1.name}: ${total_value1}")
print(f"Total value of {product2.name}: ${total_value2}")
print(f"Total value of {product3.name}: ${total_value3}")


#Question6

class Student:
    def __init__(self, name, age, grades):
        self.name = name
        self.age = age
        self.grades = grades

    def calculate_average_grade(self):
        total_grades = sum(self.grades)
        return total_grades / len(self.grades)

    def display_student_info(self): 
        print(f"Name: {self.name}")
        print(f"Age: {self.age}")
        print(f"Grades: {self.grades}")

    def determine_passing_status(self):
        average_grade = self.calculate_average_grade()
        return average_grade >= 60

student1 = Student("Mitch Odede", 18, [80, 75, 90])
student2 = Student("Nova Noel", 20, [70, 65, 55])

print("Student 1 Information:")
student1.display_student_info()
print("Average Grade:", student1.calculate_average_grade())
print("Passing Status:", student1.determine_passing_status())

print("Student 2 Information:")
student2.display_student_info()
print("Average Grade:", student1.calculate_average_grade())
print("Passing Status:", student1.determine_passing_status())






   

