import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class CategoriaProducto {
  @PrimaryGeneratedColumn()
  id_categoria_producto: number;

  @Column({ type: String, nullable: false, length: 50 })
  nombre_categoria: string;
}
