#include "stdlib.h"
#include "stdio.h"

extern int add(int a, int b);
extern int minus(int a, int b);

int main(int argc, char* argv[]) {
    printf("hello ya\n");
    int a = add(1, 2);
    int b = minus(5, 2);
    printf("sum is %d\n", a);
    printf("minus is %d\n", b);
    return 0;
}
