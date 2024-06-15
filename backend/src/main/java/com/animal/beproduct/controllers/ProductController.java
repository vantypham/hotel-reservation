package com.animal.beproduct.controllers;

import com.animal.beproduct.models.Product;
import com.animal.beproduct.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(
        origins = "*", methods = {RequestMethod.DELETE,
RequestMethod.GET, RequestMethod.PUT, RequestMethod.POST, RequestMethod.OPTIONS}
)
public class ProductController {
    private ProductService service;
    @Autowired
    public ProductController(ProductService service) {
        this.service = service;
    }

    @GetMapping("/products")
    public ResponseEntity<?> getAllProducts() {
        List<Product> list = service.getAllProducts();
        return new ResponseEntity<>(list, HttpStatus.OK);
    }

    @GetMapping("/products/{id}")
    public ResponseEntity<?> getProduct(@PathVariable (name = "id") Integer id) {
        Optional<Product> product = service.getProduct(id);
        if (product.isPresent()) {
            return new ResponseEntity<Product>(product.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<ReturnObj>(new ReturnObj("NOT_FOUND"), HttpStatus.NOT_FOUND);
        }
    }

    /**
     * SAVE
     */
    @PostMapping("/products")
    public ResponseEntity<?> saveProduct(@RequestBody Product product) {
        service.saveProduct(product);
        return new ResponseEntity<>(new ReturnObj("OK"), HttpStatus.CREATED);//201
    }

    /**
     * UPDATE
     */
    @PutMapping("/products/{id}")
    public ResponseEntity<?> updateProduct(@PathVariable (name = "id") Integer id,
                                           @RequestBody Product product) {
        service.updateProduct(id, product);
        return new ResponseEntity<>(new ReturnObj("OK"), HttpStatus.OK);
    }

    /**
     * DELETE
     */
    public ResponseEntity<?> deleteProduct(@PathVariable (name = "id") Integer id) {
        service.deleteProduct(id);
        return new ResponseEntity<>(new ReturnObj("OK"), HttpStatus.OK);
    }
}
