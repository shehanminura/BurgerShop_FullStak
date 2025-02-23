package edu.icet.ecom.service;

import edu.icet.ecom.dto.Customer;

public interface CustomerService {
    void addCustmer(Customer customer);

    Customer searchById(Integer id);

    void deleteCustomer(Integer id);

    default void updateCustomer(Customer customer) {

    }
}
