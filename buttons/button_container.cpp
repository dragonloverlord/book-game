#ifndef BUTTON_CONTAINER_CPP_INCLUDED
#define BUTTON_CONTAINER_CPP_INCLUDED

#include <gtk/gtk.h>
#include "book_buttons.hpp"

class ButtonContainer
{
public:
    static void main(GtkWidget *win, GtkWidget *main_grid)
    {
        button_container(win, main_grid);
    }
private:
    static void button_container(GtkWidget *win, GtkWidget *main_grid)
    {
        GtkWidget *scroll_frame = scroll_container(win, main_grid);

        GtkWidget *button_stack = button_stack_maker(win, main_grid);

        BookButtonsFunctions::main(win, button_stack);

        gtk_container_add(GTK_CONTAINER(scroll_frame), button_stack);

        gtk_grid_attach(GTK_GRID(main_grid), scroll_frame, 0, 0, 1, 2);
    }

    static GtkWidget* scroll_container(GtkWidget *win, GtkWidget *main_grid)
    {
        GtkWidget *scroll_frame = gtk_scrolled_window_new(NULL, NULL);

        return scroll_frame;
    }

    static GtkWidget* button_stack_maker(GtkWidget *win, GtkWidget *main_grid)
    {
        GtkWidget *button_stack = gtk_button_box_new(GTK_ORIENTATION_VERTICAL);

        return button_stack;
    }
};

#endif // BUTTON_CONTAINER_CPP_INCLUDED
