import db from '@/lib/db';
import getSession from '@/lib/session';
import { notFound } from 'next/navigation';
import { UserIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import { formatToWon } from '@/lib/utils';
import Link from 'next/link';

async function getProduct(productId: number) {
  const product = db.product.findUnique({
    where: {
      id: productId,
    },
    include: {
      user: {
        select: {
          username: true,
          avatar: true,
        },
      },
    },
  });
  return product;
}
async function getIsOwner(userId: number) {
  const session = await getSession();
  if (session.id) {
    return session.id === userId;
  }
  return false;
}

export default async function ProductDetail({
  params,
}: {
  params: { id: string };
}) {
  const id = Number(params.id);
  if (isNaN(id)) {
    return notFound();
  }

  const product = await getProduct(id);
  if (!product) {
    return notFound();
  }

  const isOwner = await getIsOwner(product.userId);

  return (
    <div>
      <div>
        <Image src={product.photo} alt={product.title} />
      </div>
      <div>
        <div>
          {product.user.avatar !== null ? (
            <Image src={product.user.avatar} alt={product.user.username} />
          ) : (
            <UserIcon />
          )}
        </div>
        <div>
          <h3>{product.user.username}</h3>
        </div>
      </div>
      <div>
        <h1>{product.title}</h1>
        <p>{product.description}</p>
      </div>
      <div>
        <span>{formatToWon(product.price)}원</span>
        {isOwner ? <button>Delete product</button> : null}
        <Link href={''}>채팅하기</Link>
      </div>
    </div>
  );
}
