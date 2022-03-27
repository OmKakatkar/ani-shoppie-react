import {
	CATEGORY_FILTER_COFFEE,
	CATEGORY_INSTANT_COFFEE,
	CATEGORY_TEA_BLEND,
	CLEAR_FILTERS,
	FILTER_BY_CATEGORY,
	FILTER_BY_PRICE,
	PRICE_HIGH_TO_LOW,
	PRICE_LOW_TO_HIGH,
	SORT_BY_PRICE
} from '../constants/filter-constants';
import { useProduct } from '../context/product-context';
import './ProductFilter.css';

function ProductFilter() {
	const { filters, dispatch } = useProduct();
	const { category, maxPrice, price } = filters;

	return (
		<aside className="aside-nav filter-container">
			<div className="filter-head-container">
				<h4 className="filter-heading text-xlg">Filters</h4>
				<button
					className="filter-clear"
					onClick={() => {
						dispatch({ type: CLEAR_FILTERS });
					}}
				>
					Clear All
				</button>
			</div>
			<div className="filter-type-container">
				<h5 className="text-lg">Price</h5>
				<ul className="filter-list price-range-labels">
					<li>100</li>
					<li>400</li>
					<li>800</li>
				</ul>
				<input
					type="range"
					min="100"
					max="800"
					onChange={e => {
						dispatch({ type: FILTER_BY_PRICE, payload: e.target.value });
					}}
					value={maxPrice || 100}
					className="price-range-slider"
					step="10"
				/>
			</div>
			<div className="filter-type-container">
				<h5 className="text-lg">Category</h5>
				<ul className="filter-list">
					<li>
						<label className="checkbox">
							<input
								type="checkbox"
								className="checkbox-input"
								onChange={() => {
									dispatch({
										type: FILTER_BY_CATEGORY,
										payload: CATEGORY_INSTANT_COFFEE
									});
								}}
								checked={category.includes(CATEGORY_INSTANT_COFFEE)}
							/>
							<div className="checkbox-icon"></div>
							Instant Coffee
						</label>
					</li>
					<li>
						<label className="checkbox">
							<input
								type="checkbox"
								className="checkbox-input"
								onChange={() => {
									dispatch({
										type: FILTER_BY_CATEGORY,
										payload: CATEGORY_FILTER_COFFEE
									});
								}}
								checked={category.includes(CATEGORY_FILTER_COFFEE)}
							/>
							<div className="checkbox-icon"></div>
							Filter Coffee
						</label>
					</li>
					<li>
						<label className="checkbox">
							<input
								type="checkbox"
								className="checkbox-input"
								onChange={() => {
									dispatch({
										type: FILTER_BY_CATEGORY,
										payload: CATEGORY_TEA_BLEND
									});
								}}
								checked={category.includes(CATEGORY_TEA_BLEND)}
							/>
							<div className="checkbox-icon"></div>
							Tea Blend
						</label>
					</li>
				</ul>
			</div>
			<div className="filter-type-container">
				<h5 className="text-lg">Rating</h5>
				<ul className="filter-list">
					<li>
						<label className="radio">
							<input type="radio" name="rating" className="radio-input" />
							<div className="radio-icon"></div>4 star & above
						</label>
					</li>
					<li>
						<label className="radio">
							<input type="radio" name="rating" className="radio-input" />
							<div className="radio-icon"></div>3 star & above
						</label>
					</li>
					<li>
						<label className="radio">
							<input type="radio" name="rating" className="radio-input" />
							<div className="radio-icon"></div>2 star & above
						</label>
					</li>
					<li>
						<label className="radio">
							<input type="radio" name="rating" className="radio-input" />
							<div className="radio-icon"></div>1 star & above
						</label>
					</li>
					<li>
						<label className="radio">
							<input type="radio" name="rating" className="radio-input" />
							<div className="radio-icon"></div>
							Unrated
						</label>
					</li>
				</ul>
			</div>
			<div className="filter-type-container">
				<h5 className="text-lg">Sort By</h5>
				<ul className="filter-list">
					<li>
						<label className="radio">
							<input
								type="radio"
								name="sort"
								className="radio-input"
								onChange={() => {
									dispatch({ type: SORT_BY_PRICE, payload: PRICE_HIGH_TO_LOW });
								}}
								checked={price && price === PRICE_HIGH_TO_LOW}
							/>
							<div className="radio-icon"></div>
							High to Low Price
						</label>
					</li>
					<li>
						<label className="radio">
							<input
								type="radio"
								name="sort"
								className="radio-input"
								onChange={() =>
									dispatch({ type: SORT_BY_PRICE, payload: PRICE_LOW_TO_HIGH })
								}
								checked={price && price === PRICE_LOW_TO_HIGH}
							/>
							<div className="radio-icon"></div>
							Low to High Price
						</label>
					</li>
				</ul>
			</div>
		</aside>
	);
}

export default ProductFilter;
