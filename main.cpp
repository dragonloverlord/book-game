#include <cstdlib>
#include <gtk/gtk.h>
#include "main.hpp"

int main (int argc, char *argv[])
{
  GtkWidget *win = NULL;
  GtkWidget *main_grid = NULL;

  /* Initialize GTK+ */
  g_log_set_handler ("Gtk", G_LOG_LEVEL_WARNING, (GLogFunc) gtk_false, NULL);
  gtk_init (&argc, &argv);
  g_log_set_handler ("Gtk", G_LOG_LEVEL_WARNING, g_log_default_handler, NULL);

  /* Create the main window */
  win = gtk_window_new(GTK_WINDOW_TOPLEVEL);
  gtk_container_set_border_width(GTK_CONTAINER (win), 8);
  gtk_window_set_title(GTK_WINDOW(win), "Book Game");
  gtk_window_set_position(GTK_WINDOW(win), GTK_WIN_POS_CENTER);
  gtk_window_set_default_size(GTK_WINDOW(win), 1200, 658);
  gtk_window_resize(GTK_WINDOW(win), 1200, 658);
  gtk_widget_realize (win);
  g_signal_connect (win, "destroy", gtk_main_quit, NULL);

  main_grid = gtk_grid_new();
  gtk_widget_set_hexpand(GTK_WIDGET(main_grid), true);
  gtk_widget_set_vexpand(GTK_WIDGET(main_grid), true);

  gtk_container_add(GTK_CONTAINER(win), GTK_WIDGET(main_grid));

  Layout::main(win, main_grid);

  /* Enter the main loop */
  gtk_widget_show_all (win);
  gtk_main ();
  std::exit(0);
}
