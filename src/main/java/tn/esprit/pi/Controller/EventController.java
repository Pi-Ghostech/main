package tn.esprit.pi.Controller;

import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tn.esprit.pi.Services.IEventService;
import tn.esprit.pi.Entities.Event;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/Event")
public class EventController {
IEventService iEventService;
    @GetMapping("/getallEvent")
    public List<Event> get_all_Event(){
        List<Event> list=iEventService.getAllEvent();
        return list;
    }
    @PostMapping("/addevent")
    public Event add_event(@RequestBody Event e){
        Event event =iEventService.addEvent(e);
        return event;
    }

    @GetMapping("/getEvent/{id}")
    public Event get_Event_by_id(@PathVariable("id") Long id){
        Event event =iEventService.getEventById(id);
        return event;

    }

    @DeleteMapping("/delete/{id}")
    public void deleteEvent(@PathVariable("id")Long id){
        iEventService.deleteEvent(id);
    }

    /*@PutMapping("/modifierEvent")
    public Event updateMoniteur(@RequestBody Event e){
        Event event = iEventService.updateEvent(e);
        return event;
    }*/

    @PutMapping("/{id}")
    public ResponseEntity<Event> updateEvent(@PathVariable("id") Long id, @RequestBody Event updatedEvent) {
        Event existingEvent = iEventService.getEventById(id);

        if (existingEvent == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        existingEvent.setTitre(updatedEvent.getTitre());
        existingEvent.setDate_event(updatedEvent.getDate_event());
        existingEvent.setClub(updatedEvent.getClub());

        Event updatedEventResult = iEventService.updateEvent(existingEvent);

        return new ResponseEntity<>(updatedEventResult, HttpStatus.OK);
    }
    @GetMapping("/recentEvents")
    public List<Event> getRecentEvents() {
        List<Event> list=iEventService.getRecentEvents();
        return list;
    }
}
