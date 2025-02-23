package edu.icet.ecom.repository;

import edu.icet.ecom.entity.CustomerEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface CustomerRepository extends JpaRepository<CustomerEntity,Integer> {

    @Query("SELECT c.id FROM CustomerEntity c ")
    List<Integer> findAllCustomerId(); // This will return only IDs of all customers
}
