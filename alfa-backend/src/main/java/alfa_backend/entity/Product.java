package alfa_backend.entity;

import jakarta.persistence.*;
import java.math.BigDecimal;
import java.util.List;

@Entity
@Table(name = "products")
public class Product extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
@JoinColumn(name = "category_id", nullable = false)
private Category category;

    public Long getId() {
        return id;
    }


    public void setId(Long id) {
        this.id = id;
    }


    public Category getCategory() {
        return category;
    }


    public void setCategory(Category category) {
        this.category = category;
    }


    public String getName() {
        return name;
    }


    public void setName(String name) {
        this.name = name;
    }


    public String getSlug() {
        return slug;
    }


    public void setSlug(String slug) {
        this.slug = slug;
    }


    public String getProductCode() {
        return productCode;
    }


    public void setProductCode(String productCode) {
        this.productCode = productCode;
    }


    public BigDecimal getPrice() {
        return price;
    }


    public void setPrice(BigDecimal price) {
        this.price = price;
    }


    public String getPriceUnit() {
        return priceUnit;
    }


    public void setPriceUnit(String priceUnit) {
        this.priceUnit = priceUnit;
    }


    public String getShortDescription() {
        return shortDescription;
    }


    public void setShortDescription(String shortDescription) {
        this.shortDescription = shortDescription;
    }


    public String getDescription() {
        return description;
    }


    public void setDescription(String description) {
        this.description = description;
    }


    public Boolean getIsInStock() {
        return isInStock;
    }


    public void setIsInStock(Boolean isInStock) {
        this.isInStock = isInStock;
    }


    public Integer getDisplayOrder() {
        return displayOrder;
    }


    public void setDisplayOrder(Integer displayOrder) {
        this.displayOrder = displayOrder;
    }


    public Boolean getIsActive() {
        return isActive;
    }


    public void setIsActive(Boolean isActive) {
        this.isActive = isActive;
    }


    public List<ProductImage> getImages() {
        return images;
    }


    public void setImages(List<ProductImage> images) {
        this.images = images;
    }


    public List<ProductSpecification> getSpecifications() {
        return specifications;
    }


    public void setSpecifications(List<ProductSpecification> specifications) {
        this.specifications = specifications;
    }


    private String name;

    private String slug;

    @Column(name = "product_code")
    private String productCode;

    private BigDecimal price;

    @Column(name = "price_unit")
    private String priceUnit;

    @Column(name = "short_description")
    private String shortDescription;

    private String description;

    @Column(name = "is_in_stock")
    private Boolean isInStock;

    @Column(name = "display_order")
    private Integer displayOrder;

    @Column(name = "is_active")
    private Boolean isActive;

    
    // Getters and Setters

    @OneToMany(
    mappedBy = "product",
    fetch = FetchType.LAZY,
    cascade = CascadeType.ALL,
    orphanRemoval = true
)
private List<ProductImage> images;


@OneToMany(
    mappedBy = "product",
    fetch = FetchType.LAZY,
    cascade = CascadeType.ALL,
    orphanRemoval = true
)
private List<ProductSpecification> specifications;

}
