from django.urls import path
from . import views


urlpatterns = [
    path('', views.index, name='index'),
    path('123/', views.index123, name='123'),
    path('books/', views.BookListView.as_view(), name='books'),
    path('authors/', views.AuthorListView.as_view(), name='authors'),
    path('book/<int:pk>', views.BookDetailView.as_view(), name='book-detail'),
    path('author/<int:pk>', views.AuthorDetailView.as_view(), name='author-detail'),
    path('mybooks/', views.LoanedBooksByUserListView.as_view(), name='my-borrowed'),
    # 表單
    path('book/<uuid:pk>/renew/', views.renew_book_librarian, name='renew-book-librarian'),
]

urlpatterns += [
    path('author/create/', views.AuthorCreate.as_view(), name='author-create'),
    path('author/<int:pk>/update/', views.AuthorUpdate.as_view(), name='author-update'),
    path('author/<int:pk>/delete/', views.AuthorDelete.as_view(), name='author-delete'),
]

