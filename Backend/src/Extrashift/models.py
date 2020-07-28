from django.db import models

GENDER_CHOICES = (
    ('F', 'Female'),
    ('M', 'Male'),
)
MANAGER_CHOICES = (
    ('SA', 'SARGIES'),
    ('MA', 'MARIKA'),
    ('LA', 'LARA'),
    ('TA', 'TIGRAN'),
)
LABALE_CHOICES = (
    ('U', 'URGENT'),
    ('N', 'NORMAL'),

)

LANG_CHOICES = (
    ('EN', 'English'),
    ('FA', 'Persian'),
    ('HY', 'Armenian'),
    ('RU', 'Russian'),
    ('AR', 'Arabic'),
    ('TR', 'Turkish'),
)


class Extrashift(models.Model):
    title = models.CharField(max_length=120)  # onvan
    slug = models.SlugField()  # onvaneLink
    datetime = models.DateTimeField()  # tarikh
    manager = models.CharField(
        choices=MANAGER_CHOICES, max_length=2)  # manager name
    quantity = models.IntegerField(default=1)  # tedad
    gender = models.CharField(choices=GENDER_CHOICES, max_length=1)  # jensiat
    Lable = models.CharField(choices=LABALE_CHOICES, max_length=1)  # zarorat
    language = models.CharField(choices=LANG_CHOICES, max_length=2)  # zaban
    # game = models.ForeignKey(Games, verbose_name=_(""), on_delete=models.CASCADE) #noe bazi
    # dealer = models.ForeignKey(Dealer, verbose_name=_(""), on_delete=models.CASCADE) #dealer

    def __str__(self):
        return self.title
