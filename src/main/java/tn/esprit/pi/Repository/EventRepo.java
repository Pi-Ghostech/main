package tn.esprit.pi.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import tn.esprit.pi.Entities.Event;

import java.sql.Date;
import java.util.List;

public interface EventRepo extends JpaRepository<Event, Long> {
    @Query("SELECT e FROM Event e WHERE e.date_event <= :date")
    List<Event> findRecentEvents(@Param("date") Date date);
}
