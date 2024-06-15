package com.animal.beproduct.services;

import com.animal.beproduct.ProductRepository;
import com.animal.beproduct.models.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {

    private ProductRepository repository;
    @Autowired
    public ProductService(ProductRepository repository) {
        this.repository = repository;
    }

    public List<Product> getAllProducts() {
        return repository.findAll();
    }

    public Optional<Product> getProduct(Integer id) {
        return repository.findById(id);
    }

    public void saveProduct(Product product) {
        repository.save(product);
    }

    public void updateProduct(Integer id, Product product) {
        product.setId(id);
        repository.deleteById(id);
        repository.save(product);
    }

    public void deleteProduct(Integer id) {
        repository.deleteById(id);
    }

}
