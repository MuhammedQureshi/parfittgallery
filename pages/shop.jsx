
import Link from 'next/link';

import styles from '../styles/Home.module.css';

import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

export default function Shop({ allProducts }) {
	return (
		<>
<div className='flex flex-col items-center justify-center h-screen mb- bg-fixed bg-center bg-cover cstm-img'>
        {/* Overlay */}
        <div className='absolute top-0 left-8 right-0 bg-black z-[2]' />
        <div className='p-5 text-white z-[2] bg-black'>
          <h2 className='text-5xl font-bold '>Shop</h2>
        </div>
      </div>
			<div className="container">
				<h2 className={styles.title}>
					All of our Artwork <span>🎨</span>
				</h2>
				<div className={styles.products_container}>
					{allProducts.map((product) => {
						return (
							<div className={styles.product_card} key={product.id}>
								<Link href={`products/${product.slug}`} legacyBehavior>
									<a>
										<div className={styles.product_img}>
											<img src={product.image.url} alt={product.name} />
										</div>
									</a>
								</Link>
								<div className={styles.product_content}>
									<h3>{product.name}</h3>
									<p>${product.price}</p>
									<button
										className="btn snipcart-add-item"
										data-item-id={product.id}
										data-item-price={product.price}
										data-item-url={`products/${product.slug}`}
										data-item-image={product.image.url}
										data-item-name={product.name}
									>
										Add to cart 🛒
									</button>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
}

export async function getStaticProps() {
	const client = new ApolloClient({
		uri: 'https://api-eu-west-2.hygraph.com/v2/clfwo5dx45mj801t7bi7kb6j1/master',
		cache: new InMemoryCache(),
	});

	const data = await client.query({
		query: gql`
        query Products {
            products {
              createdAt
              id
              name
              price
              slug
              image {
                url
              }
            }
          }
		`,
	});

	const allProducts = data.data.products;

	return {
		props: {
			allProducts,
		},
	};
}