package models;

import io.ebean.Finder;
import io.ebean.Model;
import play.data.validation.Constraints;

import javax.persistence.*;

@Entity
@Table(name = "locations")
public class Location extends Model {

    @Id
    public Long id;

    public Location(@Constraints.MaxLength(30) String city_name, Country country) {
        this.city_name = city_name;
        this.country = country;
    }

    @Column(nullable = false)
    @Constraints.MaxLength(30)
    private String city_name;

    @ManyToOne(optional = false)
    Country country;

    public static final Finder<Long, Location> finder = new Finder<>(Location.class);

}
