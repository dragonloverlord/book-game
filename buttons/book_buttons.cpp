#ifndef BOOK_BUTTONS_CPP_INCLUDED
#define BOOK_BUTTONS_CPP_INCLUDED

#include <gtk/gtk.h>
#include "../button_container.hpp"

class BookButtons
{
public:
    static void main(GtkWidget *win, GtkWidget *main_grid)
    {
        book_buttons(win, main_grid);
    }
private:
    static void book_buttons(GtkWidget *win, GtkWidget *main_grid)
    {
        GObject *main_container_data = NULL;

        main_container_data = main_container(win, main_grid);

        gpointer button_container = g_object_get_data(G_OBJECT(main_container_data), "button_container");

        ButtonContainer::main(win, main_grid);

        /* attach button_container to main_grid */
    }

    static GObject* main_container(GtkWidget *win, GtkWidget *main_grid)
    {
        GObject *data = NULL;
        GtkWidget *button_container = NULL;

        button_container = gtk_layout_new(NULL, NULL);

        g_object_set_data(G_OBJECT(data), "button_container", button_container);

        return data;
    }
};

#endif // BOOK_BUTTONS_CPP_INCLUDED
