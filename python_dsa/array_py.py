class Array:
	def __init__(self):
		self.length = 0
		self.data = {}

	def __str__(self):
		return str(self.__dict__)

	def get(self,index):
		return self.data[index]

	def push(self,item):
		self.data[self.length]= item
		self.length += 1

	def pop(self):
		temp = self.data[self.length-1]
		del self.data[self.length-1]
		self.length -=1
		return temp






arr = Array()
arr.push("hi")

arr.push("saoud")
arr.push("saoud")
arr.push("saoud")
arr.push("aisha")
arr.pop()
arr.pop()
print(arr)