import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriaProductoModule } from './categoria-producto/categoria-producto.module';
import { CategoriaProducto } from './categoria-producto/entity/categoria-producto.entity';
import { CatalogoProductoModule } from './catalogo-producto/catalogo-producto.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        return {
          type: 'mariadb',
          host: configService.get<string>('DB_HOST'),
          database: configService.get<string>('DB'),
          username: configService.get<string>('DB_USER'),
          password: configService.get<string>('DB_PASSWORD'),
          port: parseInt(configService.get<string>('DB_PORT')),
          synchronize: configService.get<string>('STATE') !== 'produccion',
          entities: [CategoriaProducto],
        };
      },
    }),
    CategoriaProductoModule,
    CatalogoProductoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
