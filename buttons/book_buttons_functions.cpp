#ifndef BOOK_BUTTONS_FUNCTIONS_CPP_INCLUDED
#define BOOK_BUTTONS_FUNCTIONS_CPP_INCLUDED

#include <gtk/gtk.h>

class BookButtonsFunctions
{
public:
    static void main(GtkWidget *win, GtkWidget *button_stack)
    {
        buttons_master(win, button_stack);
    }
private:
    static void buttons_master(GtkWidget *win, GtkWidget *button_stack)
    {
        //content goes here
    }
};

#endif // BOOK_BUTTONS_FUNCTIONS_CPP_INCLUDED
