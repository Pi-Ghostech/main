package tn.esprit.pi.Services;

import tn.esprit.pi.Entities.Club;
import tn.esprit.pi.Entities.Event;
import tn.esprit.pi.Entities.Club;

import java.util.List;

public interface IEventService {
    Event addEvent(Event event);
    List<Event> getAllEvent();
    Event getEventById(long id);
    Event updateEvent(Event event);
    void deleteEvent(long id);
    List<Event> getRecentEvents() ;

}
