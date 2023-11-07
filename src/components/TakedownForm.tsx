import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from './ui/textarea';

import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Switch } from './ui/switch';

const TakedownForm = () => {
  return (
    <>
      <Card className="w-auto relative">
        <CardHeader>
          <CardTitle>Takedown Form</CardTitle>
          <CardDescription>Enter takedown details</CardDescription>

          <div className="absolute right-8">
            <div className="flex items-center justify-center space-x-2">
              <Switch id="airplane-mode" />
              <Dialog>
                <DialogTrigger>Use LLM?</DialogTrigger>
                <DialogContent>
                  <div className="flex flex-col gap-6">
                    <div>
                      <Label htmlFor="name">Enter your OpenAI API Key</Label>
                      <Input id="name" placeholder="Name of your project" />
                    </div>

                    <div>
                      <Label htmlFor="framework">Select OpenAI model</Label>
                      <Select>
                        <SelectTrigger id="framework">
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent position="popper">
                          <SelectItem value="next">Temp 1</SelectItem>
                          <SelectItem value="sveltekit">Temp 2</SelectItem>
                          <SelectItem value="astro">Temp 3</SelectItem>
                          <SelectItem value="nuxt">Temp 4</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <Button>Submit</Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </CardHeader>

        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-row gap-8">
                <div>
                  <Label htmlFor="name">Infringing Content</Label>
                  <Input id="name" placeholder="Name of your project" />
                </div>

                <div>
                  <Label htmlFor="name">Brand Content</Label>
                  <Input id="name" placeholder="Name of your project" />
                </div>
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="framework">
                  Select the reason for Infringment
                </Label>
                <Select>
                  <SelectTrigger id="framework">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="next">Temp 1</SelectItem>
                    <SelectItem value="sveltekit">Temp 2</SelectItem>
                    <SelectItem value="astro">Temp 3</SelectItem>
                    <SelectItem value="nuxt">Temp 4</SelectItem>
                  </SelectContent>
                </Select>

                <div className="grid w-full gap-1.5">
                  <Label htmlFor="message">
                    Detailed description of the infringement that took place
                  </Label>
                  <Textarea
                    placeholder="Type your message here."
                    id="message"
                  />
                  <div className="flex justify-between">
                    <Button variant="outline">Generate Notice</Button>

                    <Dialog>
                      <DialogTrigger>Need help?</DialogTrigger>
                      <DialogContent>
                        <ul>
                          <li>Step 1: Lorem ipsum dolor sit amet.</li>
                          <li>Step 2: Consectetur adipiscing elit.</li>
                          <li>Step 3: Sed do eiusmod tempor incididunt.</li>
                          <li>Step 4: Ut labore et dolore magna aliqua.</li>
                          <li>Step 5: Enim ad minim veniam.</li>
                        </ul>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>

                <div className="grid w-full gap-1.5">
                  <Label htmlFor="message">Generated Notice</Label>
                  <Textarea
                    placeholder="Type your message here."
                    id="message"
                    className=""
                  />
                  <div className="flex gap-5">
                    <Button variant="outline">Download Notice</Button>
                    <Button variant="outline">Send e-mail</Button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </>
  );
};

export default TakedownForm;
