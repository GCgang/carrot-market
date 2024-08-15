import Image from 'next/image';
import Link from 'next/link';

interface IListProductProps {
  id: number;
  title: string;
  price: number;
  photo: string;
  created_at: Date;
}

export default function ListProduct({
  id,
  title,
  price,
  photo,
  created_at,
}: IListProductProps) {
  return (
    <Link href={`/products/${id}`}>
      <div>
        <Image fill src={photo} alt={title} />
      </div>
      <div>
        <span>{title}</span>
        <span>{created_at.toString()}</span>
        <span>{price}</span>
      </div>
    </Link>
  );
}
