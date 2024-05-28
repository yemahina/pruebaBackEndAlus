import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { CategoriaProducto } from 'src/categoria-producto/entity/categoria-producto.entity';

@Entity()
export class CatalogoProducto {
  @PrimaryGeneratedColumn()
  id_catalogo_producto: number;

  @Column({ type: String, nullable: false, length: 50 })
  nombre: string;

  @Column({ type: String, nullable: false, length: 100 })
  descripcion: string;

  @Column({ type: Number, nullable: false })
  costo: number;

  @Column({ type: String, nullable: false, length: 250 })
  url_foto: string;

  @ManyToOne(
    () => CategoriaProducto,
    (categoriaProducto) => categoriaProducto.catalogoProductos,
    { eager: true },
  )
  @JoinColumn({ name: 'id_categoria_producto' })
  categoriaProducto: CategoriaProducto;
}
