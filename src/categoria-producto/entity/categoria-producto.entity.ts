import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { CatalogoProducto } from 'src/catalogo-producto/entity/catalogo-producto.entity';

@Entity()
export class CategoriaProducto {
  @PrimaryGeneratedColumn()
  id_categoria_producto: number;

  @Column({ type: String, nullable: false, length: 50 })
  nombre_categoria: string;

  @OneToMany(
    () => CatalogoProducto,
    (categoriaProducto) => categoriaProducto.categoriaProducto,
  )
  catalogoProductos: CatalogoProducto[];
}
