package edu.icet.ecom.service;

import edu.icet.ecom.dto.Customer;

import java.util.List;

public interface CustomerService {
    void addCustmer(Customer customer);

    Customer searchById(Integer id);

    void deleteCustomer(Integer id);

    default void updateCustomer(Customer customer) {

    }

    List<Customer> getAll();

    List<Integer> getAllId();
}
