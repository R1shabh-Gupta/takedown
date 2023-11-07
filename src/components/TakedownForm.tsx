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
import CopyButton from './ui/CopyButton';

const TakedownForm = () => {
  return (
    <>
      <Card className="w-[70%] relative">
        <CardHeader>
          <CardTitle>
            <span className="text-[#E51015]">Takedown </span>Form
          </CardTitle>
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

                    <Button className="bg-[#e11318]/90 hover:bg-[#E51015]">
                      Submit
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </CardHeader>

        <CardContent>
          <form>
            <div className="grid w-full items-center gap-6">
              <div className="flex flex-row gap-8">
                <div className="basis-1/2">
                  <Label htmlFor="name">
                    Infringing Content{' '}
                    <span className="text-xs italic font-normal">
                      (Where is the infringing content?)
                    </span>
                  </Label>
                  <Input
                    id="name"
                    placeholder="http://www.website-that-stole-your-content.com"
                  />
                </div>

                <div className="basis-1/2">
                  <Label htmlFor="name">
                    Brand Content{' '}
                    <span className="text-xs italic font-normal">
                      (Where is the infringing content?)
                    </span>
                  </Label>
                  <Input
                    id="name"
                    placeholder="http://www.website-from-where data-is-stolen.com"
                  />
                </div>
              </div>

              <div className="grid w-full gap-1.5">
                <Label htmlFor="framework" className="mb-1.5">
                  Select the reason for infringement
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
              </div>

              <div className="grid w-full gap-1.5">
                <Label htmlFor="message" className="mb-1.5">
                  Detailed description of the infringement that took place
                </Label>
                <Textarea
                  placeholder="Type your message here."
                  id="message"
                  className="leading-9 mb-1.5"
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
                <Label htmlFor="message" className="mb-1.5">
                  Generated Notice
                </Label>
                <Textarea
                  placeholder="Type your message here."
                  id="message"
                  className="leading-9 mb-1.5"
                />
                <div className="flex justify-between">
                  <div className="flex gap-4">
                    <Button className="bg-[#e11318] hover:bg-[#E51015]">
                      Download Notice
                    </Button>
                    <Button variant="outline">Send e-mail</Button>
                  </div>
                  <CopyButton />
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
