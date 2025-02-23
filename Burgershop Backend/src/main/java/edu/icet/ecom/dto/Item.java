package edu.icet.ecom.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString

public class Item {
  private Integer id;
  private String name;
  private String date;
  private String category;
  private int qty;
  private Double price;
  private Double discount;
}
