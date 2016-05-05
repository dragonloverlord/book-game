#ifndef LAYOUT_CPP_INCLUDED
#define LAYOUT_CPP_INCLUDED

#include <gtk/gtk.h>
#include "layout.hpp"

class Layout
{
public:
    static void main(GtkWidget *win, GtkWidget *main_grid)
    {
        layout(win, main_grid);
    }
private:
    static void layout(GtkWidget *win, GtkWidget *main_grid)
    {
        book_buttons(win, main_grid);

        progress_bar(win, main_grid);

        book_stats(win, main_grid);
    }

    static void book_buttons(GtkWidget *win, GtkWidget *main_grid)
    {
        BookButtons::main(win, main_grid);
    }

    static void progress_bar(GtkWidget *win, GtkWidget *main_grid)
    {
        /* progress bar */
    }

    static void book_stats(GtkWidget *win, GtkWidget *main_grid)
    {
        /* book stats */
    }
};

#endif // LAYOUT_CPP_INCLUDED
