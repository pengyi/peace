objects = main.o add.o minus.o
t : $(objects)
	cc -o t $(objects)
main.o : main.c
	cc -c main.c
add.o : add.h
minus.o : minus.h
.PHONY : clean
#comment
#include filename
clean :
	-rm t $(objects)
