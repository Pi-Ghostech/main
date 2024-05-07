package tn.esprit.pi.Services;

import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.esprit.pi.Entities.Event;
import tn.esprit.pi.Repository.EventRepo;

import java.sql.Date;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
@Service
@AllArgsConstructor
public class EventService implements IEventService {
    @Autowired
    EventRepo eventRepo ;
    @Override
    public Event addEvent(Event event) {
        return eventRepo.save(event);
    }

    @Override
    public List<Event> getAllEvent() {
        return eventRepo.findAll();
    }

    @Override
    public Event getEventById(long id) {
        return eventRepo.findById(id).get();
    }

    @Override
    public Event updateEvent(Event event) {
        return eventRepo.save(event);
    }

    @Override
    public void deleteEvent(long id) {
        eventRepo.deleteById(id);

    }
    @Override
   /* public List<Event> getRecentEvents() {
        // Get the current date and time from the system
        LocalDate now = LocalDate.now();

        // Define a threshold time by subtracting the specified time interval from the current time
        LocalDate thresholdDate = now.minusDays(1); // Adjust the time interval as needed

        // Use named query to filter events by date_event
        return eventRepo.findRecentEvents(thresholdDate);
    }*/
    public List<Event> getRecentEvents() {
        // Obtenez la date actuelle
        LocalDate now = LocalDate.now();

        // Convertir LocalDate en java.sql.Date
        Date thresholdDate = Date.valueOf(now.minusDays(1));

        // Utilisez la méthode de votre EventRepo pour récupérer les événements récents
        return eventRepo.findRecentEvents(thresholdDate);
    }

}
