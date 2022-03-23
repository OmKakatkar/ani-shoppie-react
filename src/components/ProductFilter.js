import './ProductFilter.css';

function ProductFilter() {
	return (
		<aside className="aside-nav filter-container">
			<div className="filter-head-container">
				<h4 className="filter-heading text-xlg">Filters</h4>
				<button className="filter-clear">Clear All</button>
			</div>
			<div className="filter-type-container">
				<h5 className="text-lg">Price</h5>
				<ul className="filter-list price-range-labels">
					<li>50</li>
					<li>400</li>
					<li>800</li>
				</ul>
				<input
					type="range"
					min="50"
					max="800"
					value="400"
					className="price-range-slider"
					step="10"
				/>
			</div>
			<div className="filter-type-container">
				<h5 className="text-lg">Category</h5>
				<ul className="filter-list">
					<li>
						<label className="checkbox">
							<input type="checkbox" className="checkbox-input" />
							<div className="checkbox-icon"></div>
							Instant Coffee
						</label>
					</li>
					<li>
						<label className="checkbox">
							<input type="checkbox" className="checkbox-input" />
							<div className="checkbox-icon"></div>
							Filter Coffee
						</label>
					</li>
					<li>
						<label className="checkbox">
							<input type="checkbox" className="checkbox-input" />
							<div className="checkbox-icon"></div>
							Tea Blends
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
							<input type="radio" name="sort" className="radio-input" />
							<div className="radio-icon"></div>
							High to Low Price
						</label>
					</li>
					<li>
						<label className="radio">
							<input type="radio" name="sort" className="radio-input" />
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
