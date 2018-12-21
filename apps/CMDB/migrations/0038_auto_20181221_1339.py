# -*- coding: utf-8 -*-
# Generated by Django 1.11.15 on 2018-12-21 05:39
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('CMDB', '0037_auto_20181219_2035'),
    ]

    operations = [
        migrations.AlterField(
            model_name='host',
            name='ip',
            field=models.GenericIPAddressField(verbose_name='\u8bbf\u95eeIP'),
        ),
        migrations.AlterField(
            model_name='host',
            name='sn',
            field=models.CharField(blank=True, max_length=80, null=True, unique=True, verbose_name='SN\u53f7 \u7801'),
        ),
    ]
